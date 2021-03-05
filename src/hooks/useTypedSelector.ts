import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState }                         from '../state';

// eslint-disable-next-line import/prefer-default-export
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
