import { useGetAllStudentQuery } from "../../redux/features/admin/adminEndpoint";

 

const AllStudent = () => {

const  {data } = useGetAllStudentQuery(undefined)

    console.log(data)

    return (
        <div>
            AllStudent
        </div>
    );
};

export default AllStudent;