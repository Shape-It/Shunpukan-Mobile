import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
export const EyeCloseIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h24v24H0z" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="scale(.02083)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVTSURBVHgB7Vg/UxtHFH9vBbFs3SHJgCXbRW7Ankln3DlVREcqk86pjL+BXaYyfAO7yrjyUGVSGVUMFVLnzqIjY4MvhcMBHhCDIBhJu3nvpBMn6U53+uOEyeg3cyPd7e7b99v3Z98uwBBDDDHEEH0g4teQvnVnMaYn3+j6+NXS8UEOLil8CcS05Dr9ROnJ6GPjeFlJdCIAiJipv15aEtip8UZ66jmRWGx0Rlyy/vqw2NovkTAS0ejITBXlQwQ0SOgMSU6Aoqc2S1EpZVIb/+YEiLxlfcjB1yYQlkTq5vRH+jGgGzApUCtCiuV+yESCOpyUDvNB7pSIT+QlqEdQi5mwiJJF2FILmp5c0LXrxVLpcAO6RKAFHARZ4vbtuzPnlepjaiiUUebgb3VULJpFbmMXG42BIRR8K6siIwRkgJVvA7mZkrOWZZowaAJhSHSDdPo7Q0KZ5DGZZvfrRm6gC7kRxp3ColT6XCR5WV1LZRVUiy6Ztlzag+Z1Lb5WKhWLneR0tACvksLya1kRz/b33xec76EC+9bUO1A1N6FgLdBMBahgdm9va6XTXKz8xddgl8IA5XkzMxRQxqiI2W5IcExUlFxvpNKQSrXK9ZrbDQEBytdZJiAi77n77FnbS5TTFxsTKfWcyw/n/dOn94URFLOcLpuloyEx8m5y8u6M19wsd0SI+/TXdObGEbnu1x+DlGcFqrI6/9ky814CerUEr6xQ1ft+lmjVw69/mwUknr8Bl/K8in7KM3q1BK+swshrP7mWtUmuNjoLLksoFOuckt39mrJQ6vb0C1Q431CmCj+H2SWDstPx8YGVGJtY89jsDF0bz5dKB6aXXM5UzZskJkZGxQOab7mNQOrmnadkp+cN5WlV93a3X0EH8GqcnRXP+iFBGYrHZv3m4HEx7fofZIFHDmktljw6OTl82yDA/gai+psjWEr1Yn93+xcIQDw5vnrt6sTG6emB1SsJ2sgSNO5lp3mofZPKDXIdfGCTRnwwOhJ/xYsnah/OH14EmTLLX+QShEOmNUN0HxNoQAjs7mw/A1R2KuV4uHJFPOb/HmkUTaeGCQOvNNd7ig2AwkTrJ5sAqm+yLmGZVGrqKYSDaY/vhwRADkKgPtZw3hGlHTd2DHC0a9r4F/o7V2+d65QdHFBwzZAPz9RJREGoRxQTa93EBPly1kkEfrhxY3qeJvjVeeeF2bU+XhCoTXbwVtOvZxyWCoGLqd87FVNE8ojreee9FxJBytsJJiJXwclcCnJk3SdOe6RZoVQeUPI+kLCVQWQSWT8SbCE36V5JdFK+vhuna1/4WCp/cusTaVaofeMIImGTFnIBXLl9ECS8ShoqAr9vLSXazgPtG0dnEjZpjw2qHxJcP0morkJLSbOzs73ZOr9nNbq3s7WCSj25+FKrINPp6cde/TmjoBxtVJAuEl1nJ9fghFt5ngM84HsiowN2gTMRUeSYiNZiAuZjY0lDj8U3Wq1RP2G91MbiBaXEGaLi2dM1S0iuXxplSegdW6k5Kq1/9FO+xi8Abb5ogw8luGhZW8vQBwZxxg48E/PKTk7El8sVkXZyfi0uYJ6vQzR9HHVtzAo6u3phEGfsrm4lJtNTCwKRK1bDozlHgVzAKubJhcxyuWy6r1WiUfZpkaki3INKZLnbM/ZACIQkEohezth+6OpaxcEpBTgH7DUt+SfW3MnoZjwHNgo5R2XEctjzRAdZ/YNd5Mo1+MG+dUP7KsVoIsWFoqSHrlborGEqlCuVM9jwqnoHeXn2n4FJ0IWxch7PfaKOgVjga6DVErs7W5669hQD/wbcMcE7N7/DEEMM8f/DP7PvqatldbgZAAAAAElFTkSuQmCC"
        id="b"
        width={48}
        height={48}
      />
    </Defs>
  </Svg>
);
