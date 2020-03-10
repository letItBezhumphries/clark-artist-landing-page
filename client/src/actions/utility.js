import { setAlert } from './alert';


export const updateObject = (oldObj, newProps) => {
  return {
    ...oldObj,
    ...newProps
  }
};

export const processPayment = data => dispatch => {
  try {
    dispatch(setAlert('Payment Successful!', 'success'));
  } catch (err) {
    dispatch(setAlert('Payment Error', 'danger'));
  }
}


export const useDynamicFontSize = () => {
  const [fontSize, setFontSize] = useState(
    window.innerWidth < 450 ? "14px" : "18px"
  );

  useEffect(() => {
    const onResize = () => {
      setFontSize(window.innerWidth < 450 ? "14px" : "18px");
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return fontSize;
};


