function multy(input) {
    let tree_number = Number(input[0]);
    let left = tree_number;
    let rev = 0;
    let rev1 = 0;
    let rev2 = 0;
    let r = left % 10;
    rev = rev + r;
    left = left / 10
    r = left % 10;
    rev1 = rev1 + r;
    left = left / 10;
    r = left % 10;
    rev2 = rev2 + r;
    for (i = 1; i <= rev; i++) {
        for (y = 1; y <= rev1; y++) {
            for (w = 1; w <= rev2; w ++) {
                console.log(i+ " "+ "*"+" " +y+ " "+"*" + " "  + w+ " "+"=" + " " + i*y*w+";");

            }
        }

    }
}
multy(['324'])