import matchMediaPolyfill from 'mq-polyfill';

if (typeof window !== 'undefined') {
  matchMediaPolyfill(window);

  window.matchMedia('(max-width: 640px)');
  window.matchMedia('(max-width: 768px)');
  window.matchMedia('(max-width: 1024px)');
  window.matchMedia('(max-width: 1280px)');

  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };
}

export const breakpoints = {
  mobile: {
    height: 844,
    width: 390,
  },
  tablet: {
    height: 1180,
    width: 820,
  },
  desktop: {
    height: 768,
    width: 1024,
  },
};

function getWidthHeight(landscape = false, width, height) {
  return landscape ? [height, width] : [width, height];
}

export function resizeToMobile(landscape) {
  const widthHeight = [breakpoints.mobile.width, breakpoints.mobile.height];
  if (typeof window !== 'undefined')
    window.resizeTo(...getWidthHeight(landscape, ...widthHeight));
}

export function resizeToTablet(landscape) {
  const widthHeight = [breakpoints.tablet.width, breakpoints.tablet.height];
  if (typeof window !== 'undefined')
    window.resizeTo(...getWidthHeight(landscape, ...widthHeight));
}

export function resizeToDesktop() {
  if (typeof window !== 'undefined')
    window.resizeTo(
      ...getWidthHeight(
        false,
        breakpoints.desktop.width,
        breakpoints.desktop.height,
      ),
    );
}
