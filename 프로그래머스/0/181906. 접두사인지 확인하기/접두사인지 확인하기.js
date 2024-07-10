function solution(my_string, is_prefix) {
    const reg = new RegExp(`^${is_prefix}`);
    return my_string.match(reg) === null ? 0 : 1;
}