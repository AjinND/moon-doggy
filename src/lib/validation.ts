// src/lib/validation.ts
export const validators = {
  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email';
    return null;
  },
  
  phone: (phone: string) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (!phone) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    return null;
  },
  
  required: (value: string, fieldName: string) => {
    if (!value?.trim()) return `${fieldName} is required`;
    return null;
  },
  
  minLength: (value: string, min: number, fieldName: string) => {
    if (value.length < min) return `${fieldName} must be at least ${min} characters`;
    return null;
  }
};