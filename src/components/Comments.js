import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Comments = () => {

    return(

        // Input form 
        <div className="input-form" data-aos="fade-down" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-mirror="false" data-aos-once="false">
        {/* This is from material-ui makies it easier as textbox resizes by itself and hold 30 rows of text without increasing size of the text box */}
        <TextareaAutosize id="text-box" aria-label="minimum height" minRows={30} placeholder="Leave a comment..." />

        {/* input form button */} 
        <div className="input-button">
        <Button variant="contained" id="form-btn">SUBMIT</Button>
        </div>
        </div>

    );
}

export default Comments;