import { pool } from "./client";
import user from "./queries/user";

const p1 = () => user.getUsersByYearOfBirth(2000, pool);
const p2 = () => user.getUserByName("John Smith", pool);
const p3 = () => user.getUsersByYearOfBirth(1992, pool);
const p4 = () => user.getUserByName("Griffin Green", pool);
const p5 = () => user.getUsersByYearOfBirth(2005, pool);
const p6 = () => user.getUserByName("Amalia Runte", pool);

export const tasks = [p1, p2, p3, p4, p5, p6];
