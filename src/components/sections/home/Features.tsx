'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Database,
      title: 'Seamless Data Migration',
      description:
        'Complete SAP data migration with zero downtime and full integrity validation across all modules.',
      badge: 'Migration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOX-compliant security protocols with role-based access control and audit trail management.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Real-time Synchronization',
      description:
        'Instant data sync between SAP ERP and third-party systems with sub-second latency.',
      badge: 'Performance',
    },
    {
      icon: Globe,
      title: 'Multi-system Integration',
      description:
        'Connect SAP with CRM, e-commerce, and legacy systems through standardized APIs.',
      badge: 'Connectivity',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description:
        'Real-time business intelligence with custom KPIs and automated reporting capabilities.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflow Automation',
      description: 'Automated business processes with intelligent routing and approval workflows.',
      badge: 'Automation',
    },
    {
      icon: Users,
      title: 'Expert Implementation Team',
      description:
        'Certified SAP consultants with 15+ years experience in enterprise integrations.',
      badge: 'Expertise',
    },
    {
      icon: Clock,
      title: '24/7 System Monitoring',
      description: 'Proactive monitoring with instant alerts and automated failover capabilities.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Management',
      description:
        'Built-in compliance frameworks for GDPR, SOX, and industry-specific regulations.',
      badge: 'Compliance',
    },
  ];

  const handleStartIntegration = () => {
    window.location.href = '/consultation';
  };

  const handleViewCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Enterprise-Grade SAP
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your business operations with our comprehensive SAP ERP integration platform.
            Streamline processes, enhance data visibility, and accelerate digital transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Successful Integrations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">System Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">60%</div>
            <div className="text-sm text-muted-foreground">Faster Processing</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to modernize your SAP infrastructure?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartIntegration}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule Integration Assessment
            </button>
            <button
              onClick={handleViewCaseStudies}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
