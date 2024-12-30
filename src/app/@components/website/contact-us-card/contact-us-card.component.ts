import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us-card',
  templateUrl: './contact-us-card.component.html',
  styleUrls: ['./contact-us-card.component.scss'],
})
export class ContactUsCardComponent implements OnInit {
  contactUsForm: FormGroup;
  formStatus: string = '';
  notificationMessage: string = '';
  dynamicClasses: { [key: string]: boolean } = {};

  isSubmitted: boolean = false;
  isLoading: boolean = false;
  isError = false;
  isSuccess = false;

  @Input() customWidth: string | null = null;

  // Replace with your EmailJS user ID and service/template IDs
  userId = 'j6md0LTlseWNrsMCc'; // Get this from EmailJS account settings
  serviceId = 'service_fj83yxs'; // Created in the EmailJS dashboard
  templateId = 'template_jv7o8uc'; // Created in the EmailJS dashboard

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeContactUsForm();

    this.updateClasses();
  }

  initializeContactUsForm() {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    this.contactUsForm.statusChanges.subscribe((value) => {
      this.formStatus = value;
      this.updateClasses();
    });

    this.updateClasses(); // Set initial classes
  }

  get formControls() {
    return this.contactUsForm.controls;
  }

  updateClasses() {
    this.dynamicClasses = {
      [this.customWidth || 'lg:w-[45rem]']: true,
      [this.formStatus?.toLowerCase() || '']: !!this.formStatus, // Handle undefined formStatus
    };

    return this.dynamicClasses;
  }

  sendEmail(): void {
    this.isSubmitted = true;

    if (this.contactUsForm.invalid) {
      return;
    }

    const formData = this.contactUsForm.value;

    emailjs
      .send(this.serviceId, this.templateId, formData, this.userId)
      .then(() => {
        this.isLoading = true;
        this.isSubmitted = true;
        this.contactUsForm.reset();
      })
      .catch(() => {
        this.isLoading = false;
      });
  }
}
