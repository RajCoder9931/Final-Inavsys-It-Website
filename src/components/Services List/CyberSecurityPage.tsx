import { ZigZagServicePage } from './ZigZagServicePage';

export function CyberSecurityPage() {
  return (
    <ZigZagServicePage
      pageTitle="Cybersecurity"
      highlight="Services"
      subtitle="Advanced cybersecurity solutions designed to protect your systems, data, and business operations."
      services={[
        {
          title: 'Threat Detection & Prevention',
          desc: 'Our cybersecurity services focus on identifying and preventing threats before they impact your business. We use advanced monitoring tools, intrusion detection systems, and security analytics to detect suspicious activity in real time. This proactive approach helps protect sensitive data, reduce risk, and ensure business continuity.',
          image: 'https://empmonitor.com/blog/wp-content/uploads/2022/05/image1-1.png'
        },
        {
          title: 'Network Security',
          desc: 'We secure your network infrastructure with firewalls, intrusion prevention systems, and secure access controls. Our network security solutions ensure safe data transmission and protect against unauthorized access.',
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
        },
        {
          title: 'Endpoint Security',
          desc: 'Endpoints are a common target for cyberattacks. We secure laptops, desktops, and mobile devices using enterprise-grade endpoint protection and monitoring tools.',
          image: 'https://epx.co.uk/wp-content/uploads/Endpoint-Security-696x464-1.jpg'
        },
        {
          title: 'Vulnerability Assessment & Compliance',
          desc: 'We conduct regular vulnerability assessments and ensure compliance with industry standards to reduce security risks and meet regulatory requirements.',
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
        },
        {
          title: 'Incident Response & Recovery',
          desc: 'In the event of a security incident, our rapid response team minimizes damage, restores systems, and helps prevent future attacks.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
        }
      ]}
    />
  );
}
