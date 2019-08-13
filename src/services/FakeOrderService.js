class FakeOrderService {
  data = [
    {
      email: "Devil@hell.h",
      customer: "Fake Data",
      orderType: "retail",
      provider: "bunnyForMoney",
      dateToDone: "30.07.19",
      phone: "-0 000 000 000",
      product: "people",
      comment: "ASAP",
      seller: "Иванов И.И.",
      date: "01.07.19",
      orderId: "r-1907091",
      status: "done",
      id: 1
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "retail",
      provider: "needMeat",
      dateToDone: "27.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "asfdsd",
      seller: "Иванов И.И.",
      date: "21.07.19",
      orderId: "r-1907092",
      status: "done",
      id: 2
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "retail",
      provider: "needMeat",
      dateToDone: "29.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "asfdsd",
      seller: "Иванов И.И.",
      date: "21.07.19",
      orderId: "r-1907093",
      status: "failed",
      id: 3
    },
    {
      email: "Devil@hell.h",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "31.07.19",
      phone: "-0 000 000 000",
      product: "people",
      comment: "ASAP",
      seller: "Иванов И.И.",
      date: "09.07.19",
      orderId: "w-1907094",
      status: "confirm",
      id: 4
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "retail",
      provider: "needMeat",
      dateToDone: "18.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "Note",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "r-1907104",
      status: "expired",
      id: 5
    },
    {
      email: "Devil@hell.h",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "24.07.19",
      phone: "+ 0 000 000 000",
      product: "people",
      comment: "ASAP",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907105",
      status: "confirm",
      id: 6
    },
    {
      email: "gasd@gasdasd",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "31.07.19",
      phone: "+380987185",
      product: "Bananas",
      comment: "Note",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907106",
      status: "done",
      id: 7
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "24.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "afsdasd",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907107",
      status: "confirm",
      id: 8
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "bunnyForMoney",
      dateToDone: "18.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "fasdasd",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907108",
      status: "confirm",
      id: 9
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "12.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "nre",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907109",
      status: "done",
      id: 10
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "12.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "nre",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907109",
      status: "done",
      id: 11
    },
    {
      email: "rqwrr@yandex.ru",
      customer: "FAKE DATA",
      orderType: "wholesale",
      provider: "needMeat",
      dateToDone: "12.07.19",
      phone: "+380987185",
      product: "Apples",
      comment: "nre",
      seller: "Иванов И.И.",
      date: "10.07.19",
      orderId: "w-1907109",
      status: "done",
      id: 12
    }
  ];

  getOrders = async () => {
    return this.data;
  };
  postOrder = async data => {
    return "Data posted";
  };

  patchOrder = async (data, orderId) => {
    return "Patched";
  };
}

export default FakeOrderService;
