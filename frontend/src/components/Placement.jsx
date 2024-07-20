import image1 from '../assets/organization.jpg';
import image2 from '../assets/package.jpg';

function Placement() {
    const details = [
        {
            image: image1,
            title: '450+',
            package: '',
            content: 'Participating Organization',
        },
        {
            image: image2,
            title: '₹10',
            package: 'LPA',
            content: 'Average Package',
        },
        {
            image: image2,
            title: '₹2.6',
            package: 'Crore PA',
            content: 'Highest Package Offered',
        },
        {
            image: image2,
            title: '₹26.20',
            package: 'LPA',
            content: 'Top 10 percentile Average Package',
        },
    ]

    return (
        <>
            <div className='ml-2 banner bg-no-repeat bg-[#E9E9E9] bg-auto  bg-scroll bg-origin-padding bg-clip-border bg-[position:100%_0%]  w-[1500px] h-[353px]'>
                <div className='w-[1170px] h-[406.4px]'>
                    <h1 className='text-[32px] text-left p-2 ml-4 font-bold  text-blue-700 '>Placement Scenario PU</h1>
                    <div className='grid grid-cols-2  gap-2 '>
                        {details.map((detail, index) => (
                            <div key={index} className='items-center border-2 flex justify-start w-[350px] h-[160px] rounded  shadow-lg p-4'>
                                <img className='h-[60px] w-[60px] mb-6' src={detail.image} alt="" />
                                <div className='px-6 py-4 flex-col'>
                                    <div className=' text-[40px] font-normal mb-2'>{detail.title} <small className='text-[20px]'>{detail.package}</small></div>
                                    <p className='text-gray-700 text-base flex'>
                                        {detail.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Placement