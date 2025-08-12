const isLeapYeap = year => {
    const date = new Date(year, 2, 0);
    return date.getDate() === 29;
}

export default isLeapYeap;