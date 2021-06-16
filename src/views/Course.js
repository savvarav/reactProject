import React, { useEffect, useState } from "react";
import Coursedetails from "../components/Coursedetails";
import { useRouteMatch } from "react-router-dom";
import { fetchCourse } from "../api";
import Loader from "../components/Loader";
import { Col } from 'react-bootstrap';
import { fetchInstructors, fetchCourses } from "../api/index";
import { deleteCourse} from "../api";
import { useHistory } from 'react-router-dom';

// import {createBrowserHistory} from 'history'




// const history = createBrowserHistory();



const Course = () => {
    const history = useHistory();

    const match = useRouteMatch();
    const [course, setCourse] = useState(null);
    const [instr, setInstr] = useState([]);
    const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetshData = async () => {
      const courses = await fetchCourses();

      setCourses(courses);
    };

    fetshData();
  }, []);


    useEffect(() => {
        const fetshCourse = async () => {
            const course = await fetchCourse(match.params.id);

            setCourse(course);
        };

        fetshCourse();
    }, [match.params.id])


    useEffect(() => {
        const fetchTheinstructors = async () => {
            const response = await fetchInstructors();
            setInstr(response);
        };
        fetchTheinstructors();


    }, []);


    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     // const newData = {
    //     //     ...data,
    //     //     id: Math.max(...course.map(({id}) => id)) + 1
    //     //   }
    //     //   axios.post(API, newData);
    //     //   setContacts([...contacts, newData]);
    //     console.log("handle edit");
    // };
    // const [page,setPage]=useState(false)
    const handleDelete = async () => {
        await deleteCourse(course.id)
        history.push("/")

    };


    return (
        <> {course ?
            (<Coursedetails {...course}
                // handleEdit={handleEdit}
                handleDelete={handleDelete}
                instr={instr}
                 />)
            : <Col xs={12}> <Loader /> </Col>
        }
        </>


    );

};

export default Course;