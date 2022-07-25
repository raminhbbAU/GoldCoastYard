import toast from 'react-hot-toast';

const defPosition = 'bottom-right';

const sucessNotify = (message:any,position?:any,timeOut?:any) => {
    toast.success(message,{
        position: position || defPosition,
        duration: timeOut || undefined       
   });
} 

const errorNotify = (message:any,position?:any,timeOut?:any) => {
    toast.error(message,{
         position: position || defPosition,
         duration: timeOut || undefined
    });
} 

const errorNotifyByErrorObject = (error:any,position?:any,timeOut?:any) => {

    let message = ''
    console.log('/////////');
    console.log(error);
    //console.log(error.response);

    if (error.response)
    {
      if (error.response.data)
      {
        if (error.response.data.data) {
          message = error.response.data.data;
        }
        else{
          message = error.response.data;
        }
      }
      else
      {
          message = "An unexpected error occurred !"
      }
    }
    else
    {
      message = "Network Error! Please try again a bit later"
    }


    console.log(message);

    toast.error(message,{
         position: position || defPosition,
         duration: timeOut || undefined
    });
} 

export  {sucessNotify,errorNotify,errorNotifyByErrorObject};