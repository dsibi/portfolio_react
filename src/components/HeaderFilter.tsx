export function HeaderFilter() {
    return (
        <div className="row mb-5 align-items-center">
            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                <h2>Hey, I'm Dmitry!</h2>
                <p className="mb-0">Freelance Dataviz &amp; Infographics Designer</p>
            </div>
            <div className="col-md-12 col-lg-6 text-left text-lg-right" data-aos="fade-up" data-aos-delay="100">
                <div id="filters" className="filters">
                    <a href="#" data-filter="*" className="active">All</a>
                    <a href="#" data-filter=".D3">D3.js</a>
                    <a href="#" data-filter=".python">Python</a>
                    <a href="#" data-filter=".python">SQL</a>
                    <a href="#" data-filter=".illustrator">Illustrator</a>
                </div>
            </div>
        </div>
    );
}