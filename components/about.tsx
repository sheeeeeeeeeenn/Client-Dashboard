import { Home, Leaf, Wine, Shield } from 'lucide-react';

const AboutSection = () => {
    return (
        <section
            className="bg-white border-t bg-cover bg-center py-12"
            id="about"
        >
            <div className="mx-auto py-2 px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">

                    <h1 className="section-title text-4xl font-extrabold mb-8">
                        The Leading Real Estate Rental Marketplace.
                    </h1>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        <li>
                            <div className="about-item-icon flex justify-center">
                                <Home />
                            </div>
                            <p>Smart Home Design</p>
                        </li>

                        <li>
                            <div className="about-item-icon flex justify-center">
                                <Leaf />
                            </div>
                            <p>Beautiful Scene Around</p>
                        </li>

                        <li>
                            <div className="about-item-icon flex justify-center">
                                <Wine />
                            </div>
                            <p>Exceptional Lifestyle</p>
                        </li>

                        <li>
                            <div className="about-item-icon flex justify-center">
                                <Shield />
                            </div>
                            <p>Complete 24/7 Security</p>
                        </li>

                    </ul>

                    <p className="mb-8 section-title ">
                        Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage,
                        combined with specialist services and market insight, means we will always have an expert who is local to you.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default AboutSection;
