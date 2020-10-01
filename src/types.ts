import { CSSProperties } from 'react';

/**
 * Provides properties for testing purposes.
 */
export interface TestInterface {
	testId?: string;
}

/**
 * Provides commonly used component properties.
 */
export interface Component extends TestInterface {
	className?: string;
	style?: CSSProperties;
}
