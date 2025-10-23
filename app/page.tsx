"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Users, 
  Clock, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  Brain,
  Ambulance,
  Baby,
  Eye
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                HealthCare Plus
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
                About
              </a>
              <a href="#doctors" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
                Doctors
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200">
                <Award className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">Award-Winning Healthcare</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Health,{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience world-class healthcare with compassionate professionals. From preventive care to specialized treatments, we're here for you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 911
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">10k+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-2 hover:border-teal-300 transition-all">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                        <Activity className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">Cardiology</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover:border-teal-300 transition-all">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-2">
                        <Brain className="h-6 w-6 text-cyan-600" />
                      </div>
                      <CardTitle className="text-lg">Neurology</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover:border-teal-300 transition-all">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Baby className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Pediatrics</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover:border-teal-300 transition-all">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Ophthalmology</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine checkups to specialized treatments, we offer a full spectrum of medical services.
            </p>
          </div>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="primary">Primary Care</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Care</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>
            
            <TabsContent value="primary" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Stethoscope,
                    title: "General Medicine",
                    description: "Comprehensive primary care for all ages with preventive focus",
                    color: "teal"
                  },
                  {
                    icon: Heart,
                    title: "Cardiology",
                    description: "Advanced heart care with state-of-the-art diagnostics",
                    color: "red"
                  },
                  {
                    icon: Brain,
                    title: "Neurology",
                    description: "Expert care for neurological conditions and disorders",
                    color: "purple"
                  },
                  {
                    icon: Baby,
                    title: "Pediatrics",
                    description: "Specialized care for infants, children, and adolescents",
                    color: "blue"
                  },
                  {
                    icon: Eye,
                    title: "Ophthalmology",
                    description: "Complete eye care from routine exams to surgery",
                    color: "cyan"
                  },
                  {
                    icon: Activity,
                    title: "Orthopedics",
                    description: "Musculoskeletal care and sports medicine",
                    color: "green"
                  }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-teal-200">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl bg-${service.color}-100 flex items-center justify-center mb-4`}>
                        <service.icon className={`h-7 w-7 text-${service.color}-600`} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cancer Care",
                    description: "Comprehensive oncology services with multidisciplinary approach",
                    features: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "Surgery"]
                  },
                  {
                    title: "Women's Health",
                    description: "Complete care for women at every stage of life",
                    features: ["Obstetrics", "Gynecology", "Mammography", "Prenatal Care"]
                  },
                  {
                    title: "Mental Health",
                    description: "Compassionate mental health services and counseling",
                    features: ["Psychiatry", "Therapy", "Crisis Support", "Wellness Programs"]
                  },
                  {
                    title: "Surgical Services",
                    description: "Advanced surgical procedures with minimally invasive options",
                    features: ["General Surgery", "Laparoscopy", "Robotic Surgery", "Outpatient Procedures"]
                  }
                ].map((service, index) => (
                  <Card key={index} className="border-2 hover:border-teal-200 hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                      <Button className="w-full">Schedule Appointment</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Ambulance className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-red-900">24/7 Emergency Services</CardTitle>
                      <CardDescription className="text-red-700">Immediate care when you need it most</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-red-900">
                    Our emergency department is staffed by board-certified emergency physicians and trauma specialists.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-900">Trauma Center</div>
                        <div className="text-sm text-red-700">Level 1 trauma designation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-900">Fast Response</div>
                        <div className="text-sm text-red-700">Average wait time under 15 minutes</div>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency: 911
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose HealthCare Plus?</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver the best healthcare experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Board-certified physicians and caring staff"
              },
              {
                icon: Shield,
                title: "Advanced Technology",
                description: "State-of-the-art medical equipment"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock emergency services"
              },
              {
                icon: Heart,
                title: "Patient-Centered",
                description: "Personalized care plans for everyone"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-teal-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Expert Doctors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of experienced physicians is dedicated to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Sarah Johnson", specialty: "Cardiologist", experience: "15 years" },
              { name: "Dr. Michael Chen", specialty: "Neurologist", experience: "12 years" },
              { name: "Dr. Emily Williams", specialty: "Pediatrician", experience: "10 years" },
              { name: "Dr. David Martinez", specialty: "Orthopedic Surgeon", experience: "18 years" }
            ].map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-teal-200">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-teal-100">
                    <AvatarImage src="" alt={doctor.name} />
                    <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-2xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">{doctor.specialty}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{doctor.experience} experience</p>
                  <Button variant="outline" className="w-full">Book Appointment</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Jennifer Smith",
                role: "Patient",
                content: "The care I received was exceptional. The staff was friendly, professional, and truly cared about my well-being. Highly recommend!",
                rating: 5
              },
              {
                name: "Robert Taylor",
                role: "Patient",
                content: "From scheduling to treatment, everything was seamless. Dr. Chen is incredibly knowledgeable and took time to explain everything.",
                rating: 5
              },
              {
                name: "Lisa Anderson",
                role: "Patient",
                content: "The emergency department saved my life. Quick response, excellent care, and compassionate staff. Forever grateful!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-teal-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="ring-2 ring-teal-100">
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
              <AccordionContent>
                You can schedule an appointment by calling our office at (555) 123-4567, using our online booking system, or through our mobile app. We offer same-day appointments for urgent care needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
              <AccordionContent>
                Yes, we accept most major insurance plans. Please contact our billing department to verify your specific coverage. We also offer payment plans for patients without insurance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What should I bring to my first appointment?</AccordionTrigger>
              <AccordionContent>
                Please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records. Arrive 15 minutes early to complete necessary paperwork.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer telehealth services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer virtual consultations for many types of appointments. This allows you to meet with your healthcare provider from the comfort of your home using video conferencing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What are your emergency department hours?</AccordionTrigger>
              <AccordionContent>
                Our emergency department is open 24 hours a day, 7 days a week, including holidays. We're always here when you need urgent medical care.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur border-2 border-white/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl mb-4">Ready to Experience Better Healthcare?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of satisfied patients who trust us with their health. Schedule your appointment today.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment Now
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
                  <Heart className="h-6 w-6 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold">HealthCare Plus</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing exceptional healthcare services with compassion and excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
                <li><a href="#doctors" className="hover:text-teal-400 transition-colors">Our Doctors</a></li>
                <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Primary Care</li>
                <li>Specialty Care</li>
                <li>Emergency Services</li>
                <li>Telehealth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  123 Healthcare Ave, Medical City
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-400" />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-400" />
                  info@healthcareplus.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 HealthCare Plus. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

