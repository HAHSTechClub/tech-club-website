import EmbeddedPage from "./components/EmbeddedPage";
import { Email } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Map } from "@mui/icons-material";
import "./styles/Contacts.css";

function Contacts() {
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            <table>
                <tr>
                    <td>
                        <Email></Email>
                    </td>
                    <td>Official Tech Club Email</td>
                    <td>hahs.techclub@gmail.com</td>
                </tr>
                <tr>
                    <td>
                        <Email></Email>
                    </td>
                    <td>Supervising Teachers' Email</td>
                    <td>
                        dijendra.nand4@det.nsw.edu.au <br />
                        mark.zarzour3@det.nsw.edu.au
                    </td>
                </tr>
                <tr>
                    <td>
                        <Email></Email>
                    </td>
                    <td>Current Executives' Email</td>
                    <td>
                        utsav.kashichhwa@education.nsw.gov.au <br />
                        karthik.sunderraj@education.nsw.gov.au <br />
                        mikayla.rochadi@education.nsw.gov.au
                    </td>
                </tr>
                <tr>
                    <td>
                        <Instagram></Instagram>
                    </td>
                    <td>Instagram</td>
                    <td>@hahs.tech</td>
                </tr>

                <tr>
                    <td>
                        <Map></Map>
                    </td>
                    <td>Location</td>
                    <td>
                        Hurlstone Agricultural High School <br />
                        Roy Watts Rd, Glenfield NSW 2167
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Contacts;
