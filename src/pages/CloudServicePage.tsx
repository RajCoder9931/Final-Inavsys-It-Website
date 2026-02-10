import { ZigZagServicePage } from '../components/Services List/ZigZagServicePage';

export function CloudServicesPage() {
  return (
    <ZigZagServicePage
      pageTitle="Cloud Services &"
      highlight="Migration"
      subtitle="Secure, scalable cloud solutions designed to modernize infrastructure and accelerate business growth."
      services={[
        {
          title: 'Cloud Strategy & Readiness Assessment',
          desc: 'Our cloud strategy and readiness assessment helps organizations understand where they stand and how to move forward. We analyze existing infrastructure, workloads, security requirements, and business goals to determine the most suitable cloud approach. This assessment minimizes migration risks, optimizes costs, and ensures your cloud journey aligns with long-term scalability and performance objectives.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
        },
        {
          title: 'Cloud Migration Services',
          desc: 'We provide seamless cloud migration services that move your applications, data, and infrastructure with minimal downtime. Our experts plan, test, and execute migrations using proven methodologies to ensure security, reliability, and performance throughout the transition.',
          image: 'https://acsonnet.com/wp-content/uploads/2021/05/Cloud-Computing1.jpg'
        },
        {
          title: 'Hybrid & Multi-Cloud Solutions',
          desc: 'Hybrid and multi-cloud solutions provide flexibility and resilience. We design architectures that allow organizations to leverage multiple cloud platforms while maintaining centralized control and security.',
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
        },
        {
          title: 'Cloud Security & Compliance',
          desc: 'Cloud security and compliance services protect your data and workloads using industry best practices, encryption, access controls, and continuous monitoring.',
          image: 'https://www.technociate.in/wp-content/uploads/2024/11/1.jpg'
        },
        {
          title: 'Cloud Optimization & Cost Management',
          desc: 'Our cloud optimization services continuously monitor performance and costs to ensure you get maximum value from your cloud investment.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
        }
      ]}
    />
  );
}
