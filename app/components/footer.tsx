export default function Footer(){
    return(
        <footer className="flex justify-center p-5 bg-blue-800"> 
            <ul>
                <li className="text-gray-100 font-medium"> Made in Krakow @{new Date().getFullYear()} </li>
            </ul>
        </footer>
    );
}