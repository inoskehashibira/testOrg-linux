import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const True_false = (props) => {
    const [done, setDone] = useState(false)
    const { q_id, setQuestionFormData, questionFormData, deleteQuestion, key, index, setIsValidQsn, totalMarks, setTotalMarks } = props
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if ((data.question) && (data.marks)) {
            if (data.correct_answer) {
                data.options = ['true', 'false']
                data.question_type = 'true-false'
                data.q_id = q_id;
                setQuestionFormData([...questionFormData, data])
                setDone(true)
                setIsValidQsn(true)
                setTotalMarks(totalMarks + parseInt(data.marks))
            }
            else {
                toast.error('select at-least one option', {
                    autoClose: 2000,
                    toastId: 'customId',
                    theme: 'colored'
                });
            }
        }
        else {
            toast.error('fill up the empty fields', {
                autoClose: 2000,
                toastId: 'customId',
                theme: 'colored'
            });

        }

    };
    return (
        <div className='shadow-lg rounded-md border-t-8 border-t-cyan-600 text-slate-500 bg-white pt-5'>
            {/* true-false */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form px-8" name='true-false'>
                <h2 className="title font-extrabold pb-5"><span className=' text-slate-400'>true</span>false</h2>
                <div className="mcq-question-content container py-1 flex flex-col gap-10">
                    <div className="question-and-marks flex py-2  gap-5 w-full items-center ">
                        <span className=' text-3xl'>{`${index}.`}</span>
                        <div className="field-with-floating-label w-4/5 ">
                            <input className='w-full question rounded-md border-cyan-600 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                        </div>
                        <div className="field-with-floating-label w-1/5">
                            <input className='marks rounded-md border-cyan-600 outline-0 p-2 py-3 w-full' type="number" placeholder='marks here' {...register('marks')} />
                        </div>
                    </div>
                    <div className="radio-options max-w-xl flex flex-col gap-2 px-8">
                        <div className="option-field">
                            {/* <div className="numbering ">
                                <p>1.</p>
                            </div> */}
                            <input type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" value={'true'}  {...register('correct_answer')} />
                            <input className='text-field text-2xl bg-transparent border-none' type="text" value={'True'} disabled />
                        </div>
                        <div className="option-field">
                            {/* <div className="numbering ">
                                <p>2.</p>
                            </div> */}
                            <input type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" value='false'  {...register('correct_answer')} />
                            <input className='text-field text-2xl bg-transparent border-none' type="text" value={'False'} disabled />
                        </div>
                    </div>

                </div>
                {
                    done ? <span onClick={() => { deleteQuestion(q_id) }} className="cursor-pointer inline-flex text-white btn bg-red-500 hover:bg-red-700 rounded-md py-3 px-6 mx-20 my-10">delete</span> : <input type="submit" className="cursor-pointer inline-block text-white btn bg-gray-500 hover:bg-gray-700 rounded-md py-3 px-6 mx-20 my-10" value="done" />
                }
            </form>
        </div>

    );
};

export default True_false;