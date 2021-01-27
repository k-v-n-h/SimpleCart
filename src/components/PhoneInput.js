import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import testpass from './calling/calls';
import axios from 'axios';
import { Stickyroll } from '@stickyroll/stickyroll';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isNumericString
        //   prefix="+1"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

// function PhoneInput() {
//     const classes = useStyles();
//     const [values, setValues] = React.useState({
//         numberformat: '',
//     });

//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         });
//     };

//     return (
//         <div className='text-center p-4' >
//             <TextField
//                 label="Enter Number"
//                 value={values.numberformat}
//                 onChange={handleChange}
//                 name="numberformat"
//                 id="formatted-numberformat-input"
//                 InputProps={{
//                     inputComponent: NumberFormatCustom,
//                 }}
//             />
//             <p>{values.numberformat}</p>

//             <div className='items-center p-5 '>
//                 <Button
//                     className='flex items-center p-3 '
//                     // style={{maxWidth: '100px', maxHeight: '40px'}}
//                     size='large'
//                     variant='contained'
//                     color='primary'
//                     type='submit'
//                     onClick={() => testpass(values.numberformat)}
//                 >Call</Button>
//             </div>
//         </div >
//     );
// }


// export default PhoneInput


class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userNumber: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {

        const number = this.state.userNumber;

        // e.preventDefault();
        // this.setState({ submitting: true });
        console.log(number);

        fetch(`http://127.0.0.1:3000/call?data=${number}`, { mode: 'cors' })
            .catch(err => console.error(err))

        // fetch(`http://127.0.0.1:3000/call?data=${number}`, {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({title: number})
        // }).catch(err => console.error(err))
        // .then(res => res.json())
        // .then(data => {
        //     if (data.success) {
        //         console.log('passed number');
        //         this.setState({
        //             error: false,
        //             submitting: false,
        //             message: {
        //                 to: number,
        //                 body: 'test message or call my-app/api api'
        //             }
        //         });
        //     } else {
        //         this.setState({
        //             error: true,
        //             submitting: false
        //         });
        //     }
        // });

    }



    render() {
        const { userNumber } = this.state
        return (
            <div className='text-center p-4'>
                <FormControl onSubmit={this.submitHandler} >
                    <div className='text-center p-4 ' >
                        <TextField
                            label="Enter Number"
                            value={userNumber.numberformat}
                            onChange={this.handleChange}
                            name="userNumber"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />

                        <div className='items-center p-5 '>
                            <Button
                                className='flex items-center p-3 '
                                // style={{maxWidth: '100px', maxHeight: '40px'}}
                                size='large'
                                variant='contained'
                                color='primary'
                                type='submit'
                                onClick={this.submitHandler}
                            >Call now</Button>
                        </div>
                    </div >
                </FormControl>
            </div>
        )
    }
}


export default PostForm