'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'SAP Essentials',
      description: 'Perfect for small businesses starting their SAP journey',
      price: '$2,500',
      period: '/month',
      badge: null,
      icon: <Users className="size-5" />,
      features: [
        'SAP Business One integration',
        'Basic financial modules setup',
        'Email & phone support',
        'Monthly system health checks',
        'Standard reporting templates',
        'Up to 10 user licenses',
        'Basic training sessions',
      ],
      cta: 'Start Integration',
      popular: false,
    },
    {
      name: 'SAP Professional',
      description: 'Complete SAP ERP solution for growing enterprises',
      price: '$8,500',
      period: '/month',
      badge: 'Most Popular',
      icon: <Shield className="size-5" />,
      features: [
        'Full SAP S/4HANA implementation',
        'Custom module development',
        '24/7 priority support',
        'Real-time system monitoring',
        'Advanced analytics & BI',
        'Unlimited user licenses',
        'Dedicated project manager',
        'API integrations',
        'Data migration services',
        'Compliance & security audits',
      ],
      cta: 'Schedule Assessment',
      popular: true,
    },
    {
      name: 'Enterprise Plus',
      description: 'Full-scale SAP transformation for large organizations',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      icon: <Clock className="size-5" />,
      features: [
        'Multi-site SAP deployment',
        'Legacy system modernization',
        'Dedicated support team',
        'Custom workflow automation',
        'Advanced security protocols',
        'SLA with 99.9% uptime',
        'Executive reporting dashboards',
        'Change management consulting',
        'Ongoing optimization services',
        'Global rollout coordination',
      ],
      cta: 'Contact Specialists',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Packages
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transparent SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the right SAP ERP integration package for your business. Fixed monthly rates, no
            hidden implementation costs, scalable solutions.
          </p>

          {/* Implementation Timeline */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Standard Timeline
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Fast Track
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                -30% Time
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/20 text-primary"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">{plan.icon}</div>
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>

                {plan.name === 'SAP Professional' && (
                  <p className="text-xs text-primary mt-2 font-medium">
                    Includes 3-month implementation
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.popular ? handlePrimaryAction : handleSecondaryAction}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'SAP Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free SAP readiness assessment • ROI guarantee
                  </p>
                )}

                {plan.name === 'SAP Essentials' && (
                  <p className="text-center text-sm text-muted-foreground">
                    6-week implementation timeline
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom SAP solution?</h3>
          <p className="text-muted-foreground mb-6">
            Every business has unique SAP integration requirements. Our certified consultants will
            design a tailored implementation strategy that fits your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handlePrimaryAction} variant="outline" size="lg">
              Schedule SAP Consultation
            </Button>
            <Button
              onClick={handleSecondaryAction}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Download Integration Guide
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">SAP Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
