import {Link} from 'react-router-dom'

export const Alert = (prop) => {
    return (
        <div className="alert alert-success" role="alert">
                {prop.message}
            <Link className="btn btn-primary" to= "/">Go to home</Link>
        </div>
    )
}