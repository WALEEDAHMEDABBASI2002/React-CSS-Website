import "../css/DesigningSection.css";
import { Palette, PenTool, Image, Layout } from "lucide-react";

export default function DesigningSection() {

  return (
    <section className="section bg-black designing">

      <div className="container">

        <div className="section-header">
          <h2 className="text-white">Our Designing Services</h2>

          <p className="section-subtitle text-light">
            We deliver world-class graphic design solutions for businesses around
            the globe — helping brands communicate, inspire, and stand out in
            competitive markets.
          </p>
        </div>

        <div className="design-grid">

          {/* GRAPHIC DESIGN */}

          <div className="design-card">
            <div className="design-icon graphic">
              <Palette size={28}/>
            </div>

            <h4>Graphic Design</h4>

            <p>
              Professional graphic designs for branding,
              marketing materials, advertisements,
              and digital campaigns.
            </p>
          </div>


          {/* BRANDING */}

          <div className="design-card">
            <div className="design-icon branding">
              <PenTool size={28}/>
            </div>

            <h4>Brand Identity</h4>

            <p>
              Complete brand identity design including logos,
              color systems, typography, and brand guidelines.
            </p>
          </div>


          {/* SOCIAL MEDIA */}

          <div className="design-card">
            <div className="design-icon social">
              <Image size={28}/>
            </div>

            <h4>Social Media Design</h4>

            <p>
              Eye-catching visuals for social media campaigns,
              ads, posts, and promotional graphics.
            </p>
          </div>


          {/* UI DESIGN */}

          <div className="design-card">
            <div className="design-icon ui">
              <Layout size={28}/>
            </div>

            <h4>UI / Web Design</h4>

            <p>
              Modern user interface designs for websites,
              landing pages, and digital products.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}