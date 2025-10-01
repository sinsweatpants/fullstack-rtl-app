/**
 * DataAgent - Business logic layer
 * Handles data transformation, validation, and complex computations
 * Strictly separated from UI and Service layers
 */
export class DataAgent {
  /**
   * Transform raw data to display format
   */
  static transformData<T>(data: T[]): T[] {
    return data.map((item) => this.processItem(item));
  }

  /**
   * Process individual item
   */
  private static processItem<T>(item: T): T {
    // Add business logic here
    return item;
  }

  /**
   * Validate data
   */
  static validate(data: Record<string, unknown>): boolean {
    return Object.keys(data).length > 0;
  }

  /**
   * Calculate derived values
   */
  static calculate(values: number[]): number {
    return values.reduce((sum, val) => sum + val, 0);
  }

  /**
   * Filter data based on criteria
   */
  static filter<T extends Record<string, unknown>>(
    data: T[],
    predicate: (item: T) => boolean
  ): T[] {
    return data.filter(predicate);
  }

  /**
   * Sort data
   */
  static sort<T>(data: T[], key: keyof T, ascending = true): T[] {
    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      
      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }
}
