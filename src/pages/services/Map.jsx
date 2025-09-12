import React from 'react'

const BusinessConsulting = () => {

    const data = [
        {
            id: 1,
            title: "First object",
            arr1: [{
                type: "title",
                text: "Product is Nice"

            },
            {
                type: "button",
                text: "Buy Now",
            },
            {
                type: "cart",
                text: "Add to Cart",
            }
            ],
            arr2: ["a", "b", "c"],
            arr3: ["x", "y", "z"]
        },
        {
            id: 2,
            title: "Second object",
            arr1: [4, 5, 6],
            arr2: ["d", "e", "f"],
            arr3: ["u", "v", "w"]
        },
        // … total 5 objects
    ];

    return (
        <div>
            {data.map((obj) => (
                <div className='bg-white m-10' key={obj.id}>
                    <h2 className='text-3xl font-bold'>{obj.title}</h2>

                    <h3 className='text-2xl font-bold'>Arr1:</h3>
                    {/* <ul className='my-5 border shadow-2xl shadow-gray-700 hover:shadow-gray-900 p-5 flex 
                    gap-3 flex-
                    wrap flex-col items-start justify-start flex-shrink-2 '>
                        {obj.arr1.map((item) => (
                            <li className='text-shadow-2xl my-2 border p-5 text-3xl text-amber-800' key={item}><a href='#'>{item}</a></li>
                        ))}
                    </ul> */}


                    <ul className='my-5 border shadow-2xl shadow-gray-700 hover:shadow-gray-900 p-5 flex gap-3 flex-wrap flex-col items-start justify-start'>
                        {obj.arr1.map((item, index) => {
                            if (item.type === "title") {
                                return <li key={index} className="text-2xl font-bold">{item.text}</li>;
                            }
                            if (item.type === "button") {
                                return <li key={index}><button className="bg-blue-500 text-white px-4 py-2 rounded">{item.text}</button></li>;
                            }
                            if (item.type === "cart") {
                                return <li key={index}><button className="bg-green-600 text-white px-4 py-2 rounded">{item.text}</button></li>;
                            }
                            return null;
                        })}
                    </ul>


                    <h3>Arr2:</h3>
                    <ul>
                        {obj.arr2.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3>Arr3:</h3>
                    <ul>
                        {obj.arr3.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default BusinessConsulting