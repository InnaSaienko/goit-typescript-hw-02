export const formattedName = (name: string): string => {
    return name.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};

export const formattedDate = (str: string) => {
    const date = new Date(str);
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'short'});
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}