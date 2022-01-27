import { renderHook, act } from '@testing-library/react-hooks';
import {
  breakpoints,
  resizeToMobile,
  resizeToDesktop,
  resizeToTablet,
} from '../test/responsiveHelpers';
import useWindowSize from './useWindowSize';

describe('useWindowSize Hook', () => {
  it('should return the default window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(breakpoints.desktop.width);
    expect(result.current.height).toBe(breakpoints.desktop.height);
  });

  it('should return the correct size for a mobile screen', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      resizeToMobile();
    });

    expect(result.current.width).toBe(breakpoints.mobile.width);
    expect(result.current.height).toBe(breakpoints.mobile.height);

    act(() => {
      resizeToMobile(true);
    });

    expect(result.current.width).toBe(breakpoints.mobile.height);
    expect(result.current.height).toBe(breakpoints.mobile.width);
  });

  it('should return the correct size for a tablet screen', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      resizeToTablet();
    });

    expect(result.current.width).toBe(breakpoints.tablet.width);
    expect(result.current.height).toBe(breakpoints.tablet.height);

    act(() => {
      resizeToTablet(true);
    });

    expect(result.current.width).toBe(breakpoints.tablet.height);
    expect(result.current.height).toBe(breakpoints.tablet.width);
  });
});
