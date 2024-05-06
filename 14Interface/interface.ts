interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; //opsiyonel - zorunlu degil
  //startTrail:() => string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

const hakan: User = {
  dbId: 22,
  email: "hakan@.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hakan", off: 5) => {
    return 10;
  },
  githubToken: "12345",
};

//INHERITANCE (KALITIM)

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const ahmet: Admin = {
  role: "admin",
  dbId: 22,
  email: "ahmet@.com",
  userId: 3322,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hakan", off: 5) => {
    return 10;
  },
  githubToken: "12345",
};
