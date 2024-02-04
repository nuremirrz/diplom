export const sections = Array.from({ length: 26 }, (_, index) => {
    const year = 1998 + index;
    return { title: year.toString(), url: `/section${year}` };
});