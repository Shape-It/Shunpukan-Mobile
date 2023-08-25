import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectIsActiveUser } from './authSlice';

export function useIsActiveUser() {
  const isActiveUser = useSelector(selectIsActiveUser);
  return useMemo(() => isActiveUser, [isActiveUser]);
}
