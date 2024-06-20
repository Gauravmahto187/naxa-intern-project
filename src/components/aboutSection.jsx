export default function AboutSection({ data, className,showLines,linesPosition ,linesImg}) {

    const renderHTML = (html) => {
        return { __html: html };
    };

    return (
        <>
            <div className='about_section'>
            {showLines && linesImg && <img src={linesImg} className={`lines ${linesPosition ? `lines-${linesPosition}` : ''}`} alt="Decorative lines" />}
                <div className={`container flex-${className}`}>
              
               
                    <div className='img_container'>
                      <img src={data?.icon} alt="Service Icon" /> 
                    </div>

                    <div className='description'>
                     

                        <img src={data?.photo} alt="Service" />
                        <h1>{data?.title}</h1>
                        <p dangerouslySetInnerHTML={renderHTML(data?.description1)}></p>

                        <div className='paragraph_wrapper'>
                            <div dangerouslySetInnerHTML={renderHTML(data?.description2)}></div>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}