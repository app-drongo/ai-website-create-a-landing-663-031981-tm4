'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Database,
  Shield,
  Zap,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sapModules: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SAP Integration inquiry submitted:', formData);
    // Process SAP integration consultation request
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'SAP Consultation',
      description: 'Discuss your ERP integration needs',
      contact: 'sap@acmeintegrators.com',
      action: 'Email SAP Team',
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: '24/7 SAP system support',
      contact: '+1 (555) SAP-HELP',
      action: 'Call Support',
    },
    {
      icon: MessageSquare,
      title: 'Live SAP Chat',
      description: 'Instant SAP expert assistance',
      contact: 'Available during business hours',
      action: 'Start SAP Chat',
    },
  ];

  const offices = [
    {
      city: 'Enterprise Hub - Dallas',
      address: '2500 SAP Boulevard, Suite 1200',
      timezone: 'CST (UTC-6)',
      specialty: 'S/4HANA Migrations',
    },
    {
      city: 'Innovation Center - Seattle',
      address: '1800 Cloud Integration Way, Floor 25',
      timezone: 'PST (UTC-8)',
      specialty: 'Cloud SAP Solutions',
    },
    {
      city: 'Global Operations - Frankfurt',
      address: 'Dietmar-Hopp-Allee 16, Building C',
      timezone: 'CET (UTC+1)',
      specialty: 'European SAP Compliance',
    },
  ];

  const sapModules = [
    'SAP S/4HANA',
    'SAP ECC',
    'SAP SuccessFactors',
    'SAP Ariba',
    'SAP Concur',
    'SAP Fieldglass',
    'SAP Analytics Cloud',
    'SAP Integration Suite',
    'Other SAP Module',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            <Database className="size-3 mr-2" />
            SAP Integration Experts
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Enterprise Systems?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with our certified SAP consultants to discuss your ERP integration, S/4HANA
            migration, or system optimization needs. Get expert guidance tailored to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* SAP Integration Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Request SAP Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your SAP environment and integration challenges. Our certified
                consultants will respond within 4 business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Michael Thompson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="michael@enterprise.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Global Manufacturing Corp"
                  />
                </div>

                <div>
                  <label htmlFor="sapModules" className="block text-sm font-medium mb-2">
                    Primary SAP Module/System *
                  </label>
                  <select
                    id="sapModules"
                    name="sapModules"
                    value={formData.sapModules}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select your SAP system</option>
                    {sapModules.map((module, index) => (
                      <option key={index} value={module}>
                        {module}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Integration Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your SAP integration needs: system migration, API connections, data synchronization, performance optimization, or custom development requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                >
                  Request SAP Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* SAP Expert Contact Information */}
          <div className="space-y-8">
            {/* SAP Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Connect with SAP Experts
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* SAP Centers of Excellence */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                SAP Centers of Excellence
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Shield className="size-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{office.specialty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SAP Support Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  SAP Support Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Consultation</span>
                    <span>Mon-Fri, 8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technical Support</span>
                    <span>24/7 for Enterprise clients</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency SAP Issues</span>
                    <span className="text-primary font-medium">24/7 Hotline Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Zap className="size-4" />
                    Priority support for S/4HANA migrations and critical system issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
