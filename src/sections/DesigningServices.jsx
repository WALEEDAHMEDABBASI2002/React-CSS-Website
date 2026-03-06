import "../css/DesigningServices.css";

export default function GraphicDesignSection() {
    return (
        <section className="graphic-design-section bg-white section">

            <div className="container design-layout">

                {/* ROW 1 */}
                <div className="design-row grid-2-col">
                    <div className="design-text" style={{ backgroundColor: "#f5b953ff" }}>
                        <h3>Branding</h3>
                        <p>
                            We craft distinctive and memorable brand identities that enable 
                            businesses to stand out confidently in competitive global markets. 
                            From thoughtfully designed logos to comprehensive visual identity 
                            systems, our branding solutions are built to communicate your brand’s 
                            personality with clarity and sophistication.<br/> By establishing consistent 
                            visual elements across every touchpoint, we help businesses build 
                            strong recognition, credibility, and a lasting impression across 
                            digital and marketing platforms.
                        </p>
                    </div>
                    <div className="design-image">
                        <img src="/asset/branding.png" alt="Branding Design" />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="design-row grid-3-col">
                    <div className="design-image">
                        <img src="/asset/uiux.avif" alt="UI UX Design" />
                    </div>
                    <div className="design-text text-white" style={{ backgroundColor: "#000000ff" }}>
                        <h3>UI / UX Designing</h3>
                        <p>
                            We design intuitive and modern digital interfaces for websites, 
                            mobile applications, and SaaS platforms that combine functionality 
                            with refined aesthetics.By blending design strategy with usability principles, 
                            we create interfaces that not only look exceptional but also enhance 
                            engagement, improve accessibility, and support long-term product growth.
                        </p>
                    </div>
                    <div className="design-image">
                        <img src="/asset/ux.jpg" alt="Product UI" />
                    </div>
                </div>

                {/* ROW 3 */}
                <div className="design-row grid-2-col">
                    <div className="design-image">
                        <img src="/asset/social.png" alt="Social Media Design" />
                    </div>
                    <div className="design-text" style={{ backgroundColor: "#cfbd9fff" }}>
                        <h3>Social Media Posts</h3>
                        <p>
                            Our team creates visually compelling social media creatives designed 
                            to capture attention and communicate your brand message with clarity 
                            and impact.<br/> From strategic campaign visuals to engaging day-to-day 
                            content, we ensure every design reflects a consistent visual identity 
                            while strengthening your brand presence across digital platforms.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}