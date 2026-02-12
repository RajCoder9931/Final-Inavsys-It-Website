
type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  {
    name: "Career Launcher",
    logo: "https://clsite-file1.s3.amazonaws.com/106960_cl.png",
  },
  {
    name: "VLCC",
    logo: "https://vlcc.com/images/landing/logo.svg",
  },
  {
    name: "Uk Immigration",
    logo: "https://ukimmigration.co.uk/wp-content/uploads/2020/10/Group-175.svg",
  },
  {
    name: "Smile Foundation India",
    logo: "https://www.smilefoundationindia.org/donation/assets/images/logo.png",
  },
  {
    name: "Infoconn Systems",
    logo: "https://www.infoconn.com/images/weblogo274x70.png",
  },
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/a0/20220321185442%21Wipro_Primary_Logo_Color_RGB.svg/120px-Wipro_Primary_Logo_Color_RGB.svg.png",
  },
  {
    name: "PCJ Jewellers",
    logo: "https://cf-cdn.pcjeweller.com/public/uploads/settings/pcj-logo__592261435__1103462098.png",
  },
  {
    name: "Shaadi . Com",
    logo: "https://img2.shaadi.com/assests/2025/images/homepage/shaadi_logo.svg",
  },
  {
    name: "Accnture",
    logo: "https://e7.pngegg.com/pngimages/916/300/png-clipart-accenture-new-logo-icons-logos-emojis-iconic-brands-thumbnail.png",
  },
  
];

export function TopClients() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-14">
          Our <span className="text-black">Top Clients</span>
        </h2>

        {/* TOP ROW – RIGHT TO LEFT */}
        <div className="relative overflow-hidden mb-10">
          <div className="flex w-max gap-10 animate-scroll-left">
            {[...clients, ...clients].map((client, index) => (
              <ClientCard key={`top-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* BOTTOM ROW – LEFT TO RIGHT */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-10 animate-scroll-right">
            {[...clients, ...clients].map((client, index) => (
              <ClientCard key={`bottom-${index}`} client={client} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= CLIENT CARD ================= */

function ClientCard({ client }: { client: Client }) {
  return (
    <div
      className="min-w-[180px] bg-white
                 border border-gray-200 rounded-xl
                 px-6 py-5 text-center
                 shadow-sm hover:shadow-md
                 transition-transform hover:scale-105"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="w-16 h-16 object-contain mx-auto mb-3"
      />
      <p className="text-sm font-medium text-gray-800">
        {client.name}
      </p>
    </div>
  );
}