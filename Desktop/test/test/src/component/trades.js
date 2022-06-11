import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

const Trades = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://api.opex.dev/api/v3/trades?symbol=BTCUSDT&limit=100');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    console.log(data);
    return (
        <Fragment>
            <div className='card'>
                <div className='card-trades'>
                    <h2 className='card-title'>معامله های  اخیر</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">قیمت کل</th>
                                <th scope="col">(USDT)قیمت</th>
                                <th scope="col">(BTC)مقدار</th>
                                <th scope="col">زمان</th>
                                <th scope="col">تاریخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => {
                                <tr>
                                    <td>{item.quoteQty}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.time}</td>
                                    <td>{item.isBestMatch}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </Fragment>
    )
}

export default Trades
