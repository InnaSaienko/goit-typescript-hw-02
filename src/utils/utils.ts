export const formattedName = (name: string): string => {
    return name.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};

export const formattedDate = ({str}: string) => {
    let date = new Date(str);
    let day = date.getDate();
    let month = date.toLocaleString('default', {month: 'short'});
    let year = date.getFullYear();

    return `${day} ${month} ${year}`;
}