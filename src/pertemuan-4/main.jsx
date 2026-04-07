import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListSeacrhFilter from "./FrameworkListSearchFilter";
import ResponsiveGrid from "./ResponsiveGrid";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList /> */}
            {/* <FrameworkListSeacrhFilter/> */}
            <ResponsiveGrid/>
        </div>
    )
    