import ContentManagement from "../components/ContentManagement";
import CreateEvent from "../components/CreateEvent";

function Admin () {
  return (
    <>
    <h1 className="font-poppins text-primary text-2xl font-bold m-4">Welcome To The Admin Area</h1>
    <CreateEvent />
        {/* <ContentManagement />  Adding to update to allow site owner control site content easily*/ }
    </>
  )
}

export default Admin;