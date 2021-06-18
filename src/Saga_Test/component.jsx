import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncGetUserAction } from "./usersSaga"
import { asyncChangeStatusAction, asyncGetStatusAction } from './statusSaga';


const Component=()=>{
    
    const dispatch = useDispatch()
    const users = useSelector((state)=>{return state.users.users})
    const isLoading = useSelector((state)=>{return state.users.isLoading})
    const status = useSelector((state)=>{return state.users.status})

    const [valueStatus, setValueStatus] = useState('')

    useEffect(()=>{
        dispatch(asyncGetStatusAction())
        setValueStatus(status)
    },[status])


    const changeStatus=()=>{
        dispatch(asyncChangeStatusAction(valueStatus))
    }

    return (
        <div>
            <button onClick={()=>{dispatch(asyncGetUserAction())}}>Show users</button>
            <div>{isLoading && <span>Loaging...Please, wait.</span>}</div>
            <div>{users? users.map((u)=><div>{u.name}</div>): null}</div>
            
            <h3>Status</h3>
            <div><b>{status}</b></div>
            <input onChange={(e)=>{setValueStatus(e.currentTarget.value)}} value={valueStatus}></input>
            <div><button onClick={changeStatus}>ChangeStatus</button></div>
            
        </div>
    )
}

export default Component