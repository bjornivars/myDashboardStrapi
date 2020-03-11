import React from 'react';
import Moment from 'react-moment';

const JobClick = (props) => {
    const { title, created_at, company_logo, description } = props;
    return (
        <>
            <div className="col-md-6 mt-3 m-auto">
                <div className="">
                    <h1 className='text-center mt-5'>{title}</h1>
                    <p className="mt-3 text-center"><Moment>{created_at}</Moment></p>
                    <img className="card-img-top" src={company_logo} alt={title} />
                    <div className='mt-5'>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default JobClick;
