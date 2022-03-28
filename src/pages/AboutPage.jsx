import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>about this project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ex accusantium dolore fuga nam, sit cupiditate recusandae ea libero! Officia facere dolorum ullam maxime perspiciatis.</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}
export default AboutPage