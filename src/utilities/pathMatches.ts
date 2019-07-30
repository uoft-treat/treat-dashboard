export default function pathMatches(path: string, toMatch: string) {
    return !!path.match("^" + toMatch);
}
