const dateformatter = new Intl.DateTimeFormat("en-In",{
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"numeric"
});

export const formatdate = (date) => dateformatter.format(date);