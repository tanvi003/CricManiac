
// import Header from "./components/Header";
// import PrimaryMain from "./components/PrimaryMain";
// import RunsChart from "./components/RunsChart";
// import Footer from "./components/Footer";

// const PrimaryMain = React.lazy(() => import("./components/PrimaryMain.js"));
// const Header = React.lazy(() => import("./components/Header.js"));
// const RunsChart = React.lazy(() => import("./components/RunsChart.js"));
// const Footer = React.lazy(() => import("./components/Footer.js"));

// function App() {
// 	return (
// 		<React.Suspense
// 			fallback={
// 				<div className="flex justify-center items-center h-screen">
// 					<h1 className="font-serif text-4xl bold font-bold text-gray-700">
// 						Loading ...
// 					</h1>
// 				</div>
// 			}
// 		>
// 			<Header />
// 			<PrimaryMain />
// 			<RunsChart />
// 			<Footer />
// 		</React.Suspense>
// 	);
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Route from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>, 
  document.getElementById('root')
);
export default App;
