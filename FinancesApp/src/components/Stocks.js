import React, { useEffect, useState } from "react"
import StockItem from "./StockItem";
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


function Stocks() {

const [prices, setPrice] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

async function FetchPrices() {
   setLoading(true);
   setError(null)
try{
    const response = await fetch("/api")
    const docu = await response.json();
    console.log(docu)
    if(docu.length === {}) {
        throw new Error("Something went wrong!")
    }
    const stockData = docu.data;
    console.log(stockData);
    const loadedData = [];
    for (const obj in stockData) {
        loadedData.push({
            id: stockData[obj][0].id,
            symbol: stockData[obj][0].symbol,
            price: stockData[obj][0].quote.USD.price,
            change: stockData[obj][0].quote.USD.percent_change_24h
        });
    };
    console.log(loadedData);
    setPrice(loadedData);
} catch (error) {
    setError(error.message)
}
    setLoading(false);
} 

useEffect(() => {
    setLoading(true);
const interval = setInterval(() => {
    FetchPrices();
}, 60000);

    return () => clearInterval(interval);
}, [])

function mapInto(docs) {
    return <StockItem
        key={docs.id} 
        name={docs.symbol}
        price={docs.price}
        change={docs.change}
    />
}

let content = <React.Fragment>
                <ErrorOutlineIcon fontSize="large" style={{color: "#653dc4"}}/>
                <p className="wrong">No data found!</p>
              </React.Fragment>;

if (error) {
  content = <React.Fragment>
             <ErrorOutlineIcon fontSize="large" style={{color: "#653dc4"}}/>
             <p className="wrong">Something went wrong!</p>
            </React.Fragment>
}
if (prices.length > 0) {
    content = prices.map(mapInto)
}

if (loading) {
  content = <CircularProgress />;
}

return( 
    <div className="crypto-box">
        <p className="crypto">Cryptocurrency</p>
        <div className="central">{content}</div>
    </div>
)};

export default Stocks