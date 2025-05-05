
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Udfyld venligst alle felter");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Besked sendt! Vi vender tilbage hurtigst muligt.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
    
    // In production, this would be a real form submission to an email service
    // Example:
    // await fetch('/api/send-email', {
    //   method: 'POST',
    //   body: JSON.stringify(formData)
    // });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-odibee text-lg mb-2">
            Navn
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black/50 border-white/20 focus:border-ambitech-accent/70 text-white"
            placeholder="Dit navn"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-odibee text-lg mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/50 border-white/20 focus:border-ambitech-accent/70 text-white"
            placeholder="Din email"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block font-odibee text-lg mb-2">
            Besked
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-black/50 border-white/20 focus:border-ambitech-accent/70 text-white min-h-[120px]"
            placeholder="Skriv din besked her..."
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-ambitech-blue to-ambitech-purple hover:shadow-lg hover:shadow-ambitech-blue/30 font-odibee text-lg py-6"
        >
          {isSubmitting ? "Sender..." : "Send besked"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
